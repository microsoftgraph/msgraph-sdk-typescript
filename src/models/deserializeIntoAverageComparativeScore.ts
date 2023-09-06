import { type AverageComparativeScore } from './averageComparativeScore';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAverageComparativeScore(averageComparativeScore: AverageComparativeScore | undefined = {} as AverageComparativeScore) : Record<string, (node: ParseNode) => void> {
    return {
        "averageScore": n => { averageComparativeScore.averageScore = n.getNumberValue(); },
        "basis": n => { averageComparativeScore.basis = n.getStringValue(); },
        "@odata.type": n => { averageComparativeScore.odataType = n.getStringValue(); },
    }
}
