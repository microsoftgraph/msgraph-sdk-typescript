import {ScoredEmailAddress} from './scoredEmailAddress';
import {SelectionLikelihoodInfo} from './selectionLikelihoodInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScoredEmailAddress(writer: SerializationWriter, scoredEmailAddress: ScoredEmailAddress | undefined = {} as ScoredEmailAddress) : void {
        writer.writeStringValue("address", scoredEmailAddress.address);
        writer.writeStringValue("itemId", scoredEmailAddress.itemId);
        writer.writeStringValue("@odata.type", scoredEmailAddress.odataType);
        writer.writeNumberValue("relevanceScore", scoredEmailAddress.relevanceScore);
        writer.writeEnumValue<SelectionLikelihoodInfo>("selectionLikelihood", scoredEmailAddress.selectionLikelihood);
        writer.writeAdditionalData(scoredEmailAddress.additionalData);
}
