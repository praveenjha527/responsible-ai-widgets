// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { localization } from "@responsible-ai/localization";
import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
  Stack
} from "office-ui-fabric-react";
import React from "react";

import { PredictionTypes } from "../../IFairnessProps";
import { IFairnessContext } from "../../util/IFairnessContext";
import {
  IPerformancePickerPropsV2,
  IParityPickerPropsV2,
  IFeatureBinPickerPropsV2
} from "../FairnessWizard";
import { IMetrics } from "../IMetrics";

import { DropdownBarStyles } from "./DropdownBarStyles";
import { OutcomePlot } from "./OutcomePlot";
import { PerformancePlot } from "./PerformancePlot";

export interface IReportChartProps {
  dashboardContext: IFairnessContext;
  performancePickerProps: IPerformancePickerPropsV2;
  parityPickerProps: IParityPickerPropsV2;
  featureBinPickerProps: IFeatureBinPickerPropsV2;
  areaHeights: number;
  metrics: IMetrics;
}

const performanceKey = "performance";
const outcomeKey = "outcome";

export interface IState {
  displayPlotKey: string;
}

export class ReportChart extends React.Component<IReportChartProps, IState> {
  public render(): React.ReactNode {
    if (!this.state) {
      this.setState({ displayPlotKey: performanceKey });
    }
    const styles = DropdownBarStyles();
    const dropdownStyles: Partial<IDropdownStyles> = {
      dropdown: { width: 180 },
      title: { borderRadius: "5px" }
    };

    let performanceChartHeaderString = "";
    let outcomeChartHeaderString = "";

    if (
      this.props.dashboardContext.modelMetadata.PredictionType ===
      PredictionTypes.BinaryClassification
    ) {
      performanceChartHeaderString =
        localization.Fairness.Report.performanceChartHeaderBinaryClassification;
      outcomeChartHeaderString = localization.Fairness.Metrics.selectionRate;
    }
    if (
      this.props.dashboardContext.modelMetadata.PredictionType ===
      PredictionTypes.Probability
    ) {
      performanceChartHeaderString =
        localization.Fairness.Report.performanceChartHeaderProbability;
      outcomeChartHeaderString =
        localization.Fairness.Report.distributionOfPredictions;
    }
    if (
      this.props.dashboardContext.modelMetadata.PredictionType ===
      PredictionTypes.Regression
    ) {
      performanceChartHeaderString =
        localization.Fairness.Report.performanceChartHeaderRegression;
      outcomeChartHeaderString =
        localization.Fairness.Report.distributionOfPredictions;
    }

    const nameIndex = this.props.dashboardContext.groupNames.map((_, i) => i);

    const displayOptions = [
      { key: performanceKey, text: performanceChartHeaderString },
      { key: outcomeKey, text: outcomeChartHeaderString }
    ];
    return (
      <Stack tokens={{ padding: "0 0 0 100px" }}>
        <Dropdown
          label={localization.Fairness.Report.chartChoiceDropdownHeader}
          className={styles.dropDown}
          defaultSelectedKey={this.state.displayPlotKey}
          options={displayOptions}
          disabled={false}
          onChange={this.onChange.bind(this)}
          styles={dropdownStyles}
        />
        {this.state.displayPlotKey === performanceKey && (
          <PerformancePlot
            dashboardContext={this.props.dashboardContext}
            metrics={this.props.metrics}
            nameIndex={nameIndex}
            theme={undefined}
            featureBinPickerProps={this.props.featureBinPickerProps}
            performancePickerProps={this.props.performancePickerProps}
            areaHeights={this.props.areaHeights}
          />
        )}
        {this.state.displayPlotKey === outcomeKey && (
          <OutcomePlot
            dashboardContext={this.props.dashboardContext}
            metrics={this.props.metrics}
            nameIndex={nameIndex}
            theme={undefined}
            featureBinPickerProps={this.props.featureBinPickerProps}
            areaHeights={this.props.areaHeights}
          />
        )}
      </Stack>
    );
  }

  public onChange(
    _ev: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption | undefined
  ): void {
    if (!option) {
      return;
    }
    if (option?.key !== this.state.displayPlotKey) {
      this.setState({ displayPlotKey: option?.key.toString() });
    }
  }
}
