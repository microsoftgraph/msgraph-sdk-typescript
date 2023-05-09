import {AverageComparativeScore} from './averageComparativeScore';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAverageComparativeScore(writer: SerializationWriter, averageComparativeScore: AverageComparativeScore | undefined = {} as AverageComparativeScore) : void {
        writer.writeNumberValue("averageScore", averageComparativeScore.averageScore);
        writer.writeStringValue("basis", averageComparativeScore.basis);
        writer.writeStringValue("@odata.type", averageComparativeScore.odataType);
        writer.writeAdditionalData(averageComparativeScore.additionalData);
}
