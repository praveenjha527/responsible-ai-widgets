// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FairnessWizardV1,
  FairnessWizardV2,
  IMetricResponse,
  IMetricRequest,
  IFairnessData,
  IFairnessProps
} from "@responsible-ai/fairness";
import { Language } from "@responsible-ai/localization";
import { ITheme } from "office-ui-fabric-react";
import React from "react";

interface IAppProps {
  dataset: IFairnessData;
  theme: ITheme;
  language: Language;
  version: 1 | 2;
}

export class App extends React.Component<IAppProps> {
  private static supportedBinaryClassificationPerformanceKeys = [
    "accuracy_score",
    "balanced_accuracy_score",
    "precision_score",
    "recall_score",
    "f1_score"
  ];

  private static supportedRegressionPerformanceKeys = [
    "mean_absolute_error",
    "r2_score",
    "mean_squared_error",
    "root_mean_squared_error"
  ];

  private static supportedProbabilityPerformanceKeys = [
    "auc",
    "root_mean_squared_error",
    "balanced_root_mean_squared_error",
    "r2_score",
    "mean_squared_error",
    "mean_absolute_error"
  ];

  private static messages = {
    LocalExpAndTestReq: [{ displayText: "LocalExpAndTestReq" }],
    LocalOrGlobalAndTestReq: [{ displayText: "LocalOrGlobalAndTestReq" }],
    PredictorReq: [{ displayText: "PredictorReq" }],
    TestReq: [{ displayText: "TestReq" }]
  };

  public render(): React.ReactNode {
    const dashboardProps: IFairnessProps = {
      ...this.props.dataset,
      locale: this.props.language,
      requestMetrics: this.generateRandomMetrics.bind(this),
      stringParams: { contextualHelp: App.messages },
      supportedBinaryClassificationPerformanceKeys:
        App.supportedBinaryClassificationPerformanceKeys,
      supportedProbabilityPerformanceKeys:
        App.supportedProbabilityPerformanceKeys,
      supportedRegressionPerformanceKeys:
        App.supportedRegressionPerformanceKeys,
      theme: this.props.theme
    };
    switch (this.props.version) {
      case 1:
        return <FairnessWizardV1 {...dashboardProps} />;
      case 2:
      default:
        return <FairnessWizardV2 {...dashboardProps} />;
    }
  }

  // calculateMetrics can be used with local flask server for debugging
  /*private calculateMetrics(postData: IMetricRequest): Promise<IMetricResponse> {
    return fetch("http://localhost:5000/1/metrics", {
      method: "post",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp.json();
        }
        return Promise.reject(new Error(resp.statusText));
      })
      .then((json) => {
        if (json.error !== undefined) {
          throw new Error(json.error);
        }
        return Promise.resolve(json.data);
      });
  }*/

  private generateRandomMetrics(
    request: IMetricRequest,
    abortSignal?: AbortSignal
  ): Promise<IMetricResponse> {
    const binSize = Math.max(...request.binVector);
    const bins: number[] = new Array(binSize + 1)
      .fill(0)
      .map(() => Math.random());
    // bins[2] = undefined;
    const promise = new Promise<IMetricResponse>((resolve, reject) => {
      const timeout = setTimeout(() => {
        resolve({
          bins,
          global: Math.random()
        });
      }, 300);
      if (abortSignal) {
        abortSignal.addEventListener("abort", () => {
          clearTimeout(timeout);
          reject(new DOMException("Aborted", "AbortError"));
        });
      }
    });
    return promise;
  }
}
