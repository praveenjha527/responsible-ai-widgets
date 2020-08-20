module.exports = {
  loremIpsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  defaultClassNames: "クラス {0}",
  defaultFeatureNames: "重要な特徴量 {0}",
  defaultSingleFeatureName: "重要な特徴量",
  defaultCustomMetricName: "カスタム メトリック {0}",
  accuracyTab: "パフォーマンスの公平性",
  opportunityTab: "機会の公平性",
  modelComparisonTab: "モデルの比較",
  tableTab: "詳細ビュー",
  dataSpecifications: "データの統計情報",
  attributes: "属性",
  singleAttributeCount: "1 個の重要な特徴量",
  attributesCount: "{0} 個の重要な特徴量",
  instanceCount: "{0} 個のインスタンス",
  close: "閉じる",
  calculating: "計算しています...",
  accuracyMetricLegacy: "パフォーマンス メトリック",
  errorOnInputs:
    "入力でエラーが発生しました。現在、重要な特徴量はカテゴリ値である必要があります。値をビン分割されたカテゴリにマップしてから、もう一度お試しください。",
  Accuracy: {
    header: "パフォーマンスの測定方法",
    modelMakes: "モデルの結果",
    modelsMake: "モデルの結果",
    body:
      "お客様のデータには、{0} ラベルと {2} {1} 予測が含まれています。この情報に基づいて、次のメトリックをお勧めします。リストからメトリックをいずれか 1 つ選択してください。",
    binaryClassifier: "2 項分類子",
    probabalisticRegressor: "プロビット リグレッサー",
    regressor: "リグレッサー",
    binary: "2 項",
    continuous: "継続的"
  },
  Parity: {
    header: "公平性を不均衡の観点から測定",
    body:
      "不均衡メトリックは、選択した特徴量間のモデルの動作のバリエーションを定量化します。次の 2 種類の不均衡メトリックがあり、さらに増える予定です。"
  },
  Header: {
    title: "Fairlearn",
    documentation: "ドキュメント"
  },
  Footer: {
    back: "戻る",
    next: "次へ"
  },
  Intro: {
    welcome: "ようこそ:",
    fairlearnDashboard: "Fairlearn ダッシュボード",
    introBody:
      "Fairlearn ダッシュボードを使用すると、モデルのパフォーマンスと公平性との間のトレードオフを評価できます",
    explanatoryStep:
      "評価を設定するには、重要な特徴量とパフォーマンス メトリックを指定する必要があります。",
    getStarted: "はじめに",
    features: "重要な特徴量",
    featuresInfo:
      "重要な特徴量は、データをグループに分割するために使用されます。これらのグループ間のモデルの公平性は、不均衡メトリックによって測定されます。不均衡メトリックは、これらのグループ間でモデルの動作がどれだけ変わるかを定量化します。",
    accuracy: "パフォーマンス メトリック",
    accuracyInfo:
      "パフォーマンス メトリックは、モデルの全体的な品質と、各グループのモデルの品質を評価するために使用されます。グループ間のパフォーマンス メトリックの極値の差は、パフォーマンスの不均衡として報告されます。"
  },
  ModelComparison: {
    title: "モデルの比較",
    howToRead: "このグラフの読み取り方法",
    lower: "値が小さい",
    higher: "値が大きい",
    howToReadText:
      "このグラフでは、各 {0} モデルを選択可能なポイントとして表します。X 軸は {1} を表し、{2} ほど優れています。Y 軸は、不均衡を表し、値が小さいほど優れています。",
    insights: "分析情報",
    insightsText1:
      "このグラフには、{1} モデルの {0} と不均衡が示されています。",
    insightsText2:
      "{0} の範囲は {1} から {2} までです。不均衡の範囲は {3} から {4} までです。",
    insightsText3:
      "最も正確なモデルは {1} の {0} と {2} の不均衡を実現します。",
    insightsText4:
      "最小の不均衡モデルは、{1} の {0} と {2} の不均衡を実現します。",
    disparityInOutcomes: "予測の不均衡",
    disparityInAccuracy: "{0} の不均衡",
    howToMeasureDisparity: "不均衡の測定方法"
  },
  Report: {
    modelName: "モデル {0}",
    title: "パフォーマンスの不均衡",
    globalAccuracyText: "全体的な {0}",
    accuracyDisparityText: "{0} の不均衡",
    editConfiguration: "構成の編集",
    backToComparisons: "マルチモデル ビュー",
    outcomesTitle: "予測の不均衡",
    minTag: "最小値",
    maxTag: "最大値",
    groupLabel: "サブグループ",
    underestimationError: "過小予測",
    underpredictionExplanation: "(予測 = 0、true = 1)",
    overpredictionExplanation: "(予測 = 1、true = 0)",
    overestimationError: "過剰予測",
    classificationOutcomesHowToRead:
      "横棒グラフは、各グループの選択率を示しており、ポイントの割合が 1 として分類されます。",
    regressionOutcomesHowToRead:
      "ボックス プロットは、各グループの予測の分布を示します。個々のデータ ポイントは上に重ねて表示されています。",
    classificationAccuracyHowToRead1:
      "横棒グラフは、各グループの誤差の分布を示します。",
    classificationAccuracyHowToRead2:
      "誤差は過剰予測による誤差 (true ラベルが 0 の場合に 1 を予測) と過少予測による誤差 (true ラベルが 1 の場合に 0 を予測) に分割されます。",
    classificationAccuracyHowToRead3:
      "報告率は、誤差の数をグループ全体のサイズで除算して取得します。",
    probabilityAccuracyHowToRead1:
      "横棒グラフは、各グループの平均絶対誤差を示しており、過剰予測と過少予測に分割されます。",
    probabilityAccuracyHowToRead2:
      "それぞれの例では、予測とラベルの差を測定します。正の場合は過剰予測と呼び、負の場合は過少予測と呼びます。",
    probabilityAccuracyHowToRead3:
      "過剰予測の誤差の合計と過小予測の誤差の合計をグループ全体のサイズで除算したものが報告されます。",
    regressionAccuracyHowToRead:
      "誤差は、予測とラベルの差です。ボックス プロットは、各グループの誤差の分布を示します。個々のデータ ポイントが上に重ねて表示されています。",
    distributionOfPredictions: "予測の分布",
    distributionOfErrors: "誤差の分布",
    tooltipPrediction: "予測: {0}",
    tooltipError: "誤差: {0}"
  },
  Feature: {
    header: "モデルの公平性を評価する特徴量",
    body:
      "公平性は、モデルの動作における不均衡の観点から評価されます。選択された各特徴量の値に従ってデータが分割され、モデルのパフォーマンス メトリックと予測がこれらの分割間でどのように異なるかが評価されます。",
    learnMore: "詳細情報",
    summaryCategoricalCount: "この特徴量には {0} 個の一意の値があります",
    summaryNumericCount:
      "この数値の特徴量は {0} から {1} までの範囲に及び、{2} 個のビンにグループ化されています。",
    showCategories: "すべて表示",
    hideCategories: "折りたたむ",
    categoriesOverflow: "と {0} 個の追加カテゴリ",
    editBinning: "グループの編集",
    subgroups: "サブグループ"
  },
  Metrics: {
    accuracyScore: "精度",
    precisionScore: "精度",
    recallScore: "再現率",
    zeroOneLoss: "0-1 損失",
    specificityScore: "特異度スコア",
    missRate: "見逃し率",
    falloutRate: "フォールアウト率",
    maxError: "誤差の最大値",
    meanAbsoluteError: "平均絶対誤差",
    meanSquaredError: " MSE (平均二乗誤差)",
    meanSquaredLogError: "平均二乗対数誤差",
    medianAbsoluteError: "中央絶対誤差",
    average: "平均予測",
    selectionRate: "選択率",
    overprediction: "過剰予測",
    underprediction: "過小予測",
    r2_score: "決定係数スコア",
    rms_error: "RMSE (平均平方二乗誤差)",
    auc: "ROC 曲線下の面積",
    balancedRootMeanSquaredError: "バランスの取れた RMSE",
    balancedAccuracy: "バランス精度",
    f1Score: "F1-Score",
    logLoss: "Log Loss",
    accuracyDescription: "正しく分類されたデータ ポイントの割合。",
    precisionDescription:
      "1 に分類されたデータ ポイントの中で正しく分類されたデータ ポイントの割合。",
    recallDescription:
      "true ラベルが 1 のデータ ポイントの中で正しく分類されたデータ ポイントの割合。代替名: 真陽性率、感度。",
    rmseDescription: "平均二乗誤差の平方根。",
    mseDescription: "二乗誤差の平均値。",
    meanAbsoluteErrorDescription:
      "誤差の絶対値の平均値。MSE よりも外れ値に対して頑健です。",
    r2Description: "モデルによって説明されているラベルの差異の割合。",
    aucDescription:
      "負の例から正の例を分ける際の予測の品質をスコアとして見たものです。",
    balancedRMSEDescription:
      "正および負の例は、総重量が等しくなるようにもう一度加重されます。基になるデータが極めて不均衡である場合に適しています。",
    balancedAccuracyDescription:
      "正および負の例は、総重量が等しくなるようにもう一度加重されます。基になるデータが極めて不均衡である場合に適しています。",
    f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall."
  },
  BinDialog: {
    header: "ビンの構成",
    makeCategorical: "カテゴリ別として扱う",
    save: "保存",
    cancel: "キャンセル",
    numberOfBins: "ビンの数:",
    categoryHeader: "ビンの値:"
  }
};