module.exports = {
  loremIpsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  defaultClassNames: "클래스 {0}",
  defaultFeatureNames: "중요한 기능 {0}",
  defaultSingleFeatureName: "중요한 기능",
  defaultCustomMetricName: "사용자 지정 메트릭 {0}",
  accuracyTab: "성능의 공정성",
  opportunityTab: "기회의 공정성",
  modelComparisonTab: "모델 비교",
  tableTab: "자세히 보기",
  dataSpecifications: "데이터 통계",
  attributes: "특성",
  singleAttributeCount: "중요한 기능 1개",
  attributesCount: "중요한 기능 {0}개",
  instanceCount: "인스턴스 {0}개",
  close: "닫기",
  calculating: "계산하는 중...",
  accuracyMetricLegacy: "성능 메트릭",
  errorOnInputs:
    "입력에 오류가 있습니다. 지금은 중요한 기능이 범주 값이어야 합니다. 값을 계급 구간으로 나뉜 범주에 매핑한 후 다시 시도하세요.",
  Accuracy: {
    header: "성능을 어떻게 측정하시겠습니까?",
    modelMakes: "모델 생성",
    modelsMake: "모델 생성",
    body:
      "데이터에 {0} 레이블과 {2} {1} 예측이 포함되어 있습니다. 해당 정보를 기반으로, 다음과 같은 메트릭이 권장됩니다. 목록에서 메트릭 하나를 선택하세요.",
    binaryClassifier: "이진 분류자",
    probabalisticRegressor: "프로빗 회귀 변수",
    regressor: "회귀 변수",
    binary: "이진",
    continuous: "연속"
  },
  Parity: {
    header: "차이 측면에서 측정된 공정성",
    body:
      "차이 메트릭은 선택한 기능에서 모델 동작의 변형을 정량화합니다. 차이 메트릭에는 두 가지 종류가 있으며 더 많은 종류가 제공될 예정입니다."
  },
  Header: {
    title: "Fairlearn",
    documentation: "설명서"
  },
  Footer: {
    back: "뒤로",
    next: "다음"
  },
  Intro: {
    welcome: "환영",
    fairlearnDashboard: "Fairlearn 대시보드",
    introBody:
      "Fairlearn 대시보드에서 모델의 성능과 공정성 간의 상쇄 관계를 평가할 수 있습니다.",
    explanatoryStep:
      "평가를 설정하려면 중요한 기능과 성능 메트릭을 지정해야 합니다.",
    getStarted: "시작",
    features: "중요한 기능",
    featuresInfo:
      "중요한 기능은 데이터를 그룹으로 분할하는 데 사용됩니다. 해당 그룹에서 모델의 공정성은 차이 메트릭으로 측정됩니다. 차이 메트릭은 모델의 동작이 해당 그룹에서 얼마나 다른지를 정량화합니다.",
    accuracy: "성능 메트릭",
    accuracyInfo:
      "성능 메트릭은 모델의 전체 품질과 각 그룹의 모델 품질을 평가하는 데 사용됩니다. 그룹에서 성능 메트릭의 극단적인 값 간 차이는 성능의 차이로 보고됩니다."
  },
  ModelComparison: {
    title: "모델 비교",
    howToRead: "이 차트를 읽는 방법",
    lower: "더 낮은",
    higher: "더 높은",
    howToReadText:
      "이 차트에서는 {0}개 모델을 각각 선택 가능한 요소로 나타냅니다. x축은 {1}을(를) 나타내고 {2} 경우가 더 좋습니다. y축은 차이를 나타내고 더 낮은 경우가 더 좋습니다.",
    insights: "인사이트",
    insightsText1: "차트에는 {1}개 모델의 {0} 및 차이가 표시됩니다.",
    insightsText2: "{0}의 범위는 {1}~{2}입니다. 차이 범위는 {3}~{4}입니다.",
    insightsText3: "가장 정확한 모델은 {1}의 {0} 및 {2}의 차이를 실현합니다.",
    insightsText4: "차이가 최저인 모델은 {1}의 {0} 및 {2}의 차이를 실현합니다.",
    disparityInOutcomes: "예측의 차이",
    disparityInAccuracy: "{0}의 차이",
    howToMeasureDisparity: "차이를 측정하는 방법은 무엇입니까?"
  },
  Report: {
    modelName: "모델 {0}",
    title: "성능의 차이",
    globalAccuracyText: "전체 {0}인지 여부",
    accuracyDisparityText: "{0}의 차이인지 여부",
    editConfiguration: "구성 편집",
    backToComparisons: "다중 모델 보기",
    outcomesTitle: "예측의 차이",
    minTag: "최솟값",
    maxTag: "최댓값",
    groupLabel: "하위 그룹",
    underestimationError: "과소 예측",
    underpredictionExplanation: "(예측 = 0, 실제 = 1)",
    overpredictionExplanation: "(예측 = 1, 실제 = 0)",
    overestimationError: "과대 예측",
    classificationOutcomesHowToRead:
      "가로 막대형 차트는 각 그룹의 선택 비율을 보여 주며, 1로 분류된 요소의 비율을 의미합니다.",
    regressionOutcomesHowToRead:
      "상자 그림은 각 그룹의 예측 분포를 보여 줍니다. 개별 데이터 요소가 위에 오버레이되어 있습니다.",
    classificationAccuracyHowToRead1:
      "가로 막대형 차트는 각 그룹의 오차 분포를 보여 줍니다.",
    classificationAccuracyHowToRead2:
      "오차는 과대 예측 오차(실제 레이블이 0인 경우 1을 예측)와 과소 예측 오차(실제 레이블이 1인 경우 0을 예측)로 나뉩니다.",
    classificationAccuracyHowToRead3:
      "보고된 비율은 오차 수를 전체 그룹 크기로 나눠 얻을 수 있습니다.",
    probabilityAccuracyHowToRead1:
      "가로 막대형 차트는 각 그룹의 절대 평균 오차를 의미하며, 과대 예측과 과소 예측으로 나누어져 있습니다.",
    probabilityAccuracyHowToRead2:
      "각 예제에서는 예측과 레이블 간의 차이를 측정합니다. 양수이면 과대 예측이라고 하고, 음수이면 과소 예측이라고 합니다.",
    probabilityAccuracyHowToRead3:
      "과대 예측 오차의 합계와 과소 예측 오차의 합계를 전체 그룹 크기로 나눈 값을 보고합니다.",
    regressionAccuracyHowToRead:
      "오차는 예측과 레이블 간의 차이입니다. 상자 그림은 각 그룹의 오차 분포를 보여 줍니다. 개별 데이터 요소가 위에 오버레이되어 있습니다.",
    distributionOfPredictions: "예측 분포",
    distributionOfErrors: "오차 분포",
    tooltipPrediction: "예측: {0}",
    tooltipError: "오차: {0}"
  },
  Feature: {
    header: "어떤 기능에 따라 모델의 공정성을 평가하시겠습니까?",
    body:
      "공정성은 모델 동작의 차이 측면에서 평가됩니다. 선택한 각 기능의 값에 따라 데이터를 분할하고 해당 분할에서 모델의 성능 메트릭 및 예측이 어떻게 다른지를 평가합니다.",
    learnMore: "자세한 정보",
    summaryCategoricalCount: "이 기능에는 고유 값이 {0}개 있습니다.",
    summaryNumericCount:
      "이 숫자 기능은 범위가 {0}~{1}이며, {2}개 bin으로 그룹화되었습니다.",
    showCategories: "모두 표시",
    hideCategories: "축소",
    categoriesOverflow: "   및 {0}개 추가 범주",
    editBinning: "그룹 편집",
    subgroups: "하위 그룹"
  },
  Metrics: {
    accuracyScore: "정확도",
    precisionScore: "정밀도",
    recallScore: "회수",
    zeroOneLoss: "제로-원 손실",
    specificityScore: "특정성 점수",
    missRate: "실패율",
    falloutRate: "좋지 못한 결과 비율",
    maxError: "최대 오차",
    meanAbsoluteError: "절대 평균 오차",
    meanSquaredError: " MSE(평균 제곱 오차)",
    meanSquaredLogError: "평균 제곱 로그 오차",
    medianAbsoluteError: "중앙값 절대 오차",
    average: "평균 예측",
    selectionRate: "선택 비율",
    overprediction: "과대 예측",
    underprediction: "과소 예측",
    r2_score: "R-제곱 점수",
    rms_error: "RMSE(제곱 평균 오차)",
    auc: "ROC 곡선 아래의 영역",
    balancedRootMeanSquaredError: "균형 잡힌 RMSE",
    balancedAccuracy: "균형 정확도",
    f1Score: "F1-Score",
    logLoss: "Log Loss",
    accuracyDescription: "제대로 분류된 데이터 요소의 비율입니다.",
    precisionDescription:
      "1로 분류된 데이터 요소 중에서 제대로 분류된 데이터 요소의 비율입니다.",
    recallDescription:
      "실제 레이블이 1인 데이터 요소 중 제대로 분류된 데이터 요소의 비율입니다. 대체 이름: 진양성 비율, 민감도.",
    rmseDescription: "제곱 오차의 평균에 대한 제곱근입니다.",
    mseDescription: "제곱 오차의 평균입니다.",
    meanAbsoluteErrorDescription:
      "오차의 절대값에 대한 평균입니다. MSE보다 이상값에 영향을 덜 받습니다.",
    r2Description: "모델에서 설명하는 레이블의 분산 비율입니다.",
    aucDescription:
      "올바른 예제와 잘못된 예제를 구분하여 점수로 표시한 예측의 품질입니다.",
    balancedRMSEDescription:
      "올바른 예제와 잘못된 예제는 같은 총 가중치를 갖도록 가중치가 다시 지정됩니다. 기본 데이터가 매우 불균형한 경우 적합합니다.",
    balancedAccuracyDescription:
      "올바른 예제와 잘못된 예제는 같은 총 가중치를 갖도록 가중치가 다시 지정됩니다. 기본 데이터가 매우 불균형한 경우 적합합니다.",
    f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall."
  },
  BinDialog: {
    header: "bin 구성",
    makeCategorical: "범주로 처리",
    save: "저장",
    cancel: "취소",
    numberOfBins: "bin 수:",
    categoryHeader: "bin 값:"
  }
};