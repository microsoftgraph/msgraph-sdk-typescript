import {AverageComparativeScore} from './averageComparativeScore';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAverageComparativeScore(averageComparativeScore: AverageComparativeScore | undefined = {} as AverageComparativeScore, writer: SerializationWriter) : void {
        writer.writeNumberValue("averageScore", averageComparativeScore.averageScore);
        writer.writeStringValue("basis", averageComparativeScore.basis);
        writer.writeStringValue("@odata.type", averageComparativeScore.odataType);
        writer.writeAdditionalData(averageComparativeScore.additionalData);
}
