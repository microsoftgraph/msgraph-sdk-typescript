import {VerifiedPublisher} from './verifiedPublisher';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifiedPublisher(verifiedPublisher: VerifiedPublisher | undefined = {} as VerifiedPublisher) : Record<string, (node: ParseNode) => void> {
    return {
        "addedDateTime": n => { verifiedPublisher.addedDateTime = n.getDateValue(); },
        "displayName": n => { verifiedPublisher.displayName = n.getStringValue(); },
        "@odata.type": n => { verifiedPublisher.odataType = n.getStringValue(); },
        "verifiedPublisherId": n => { verifiedPublisher.verifiedPublisherId = n.getStringValue(); },
    }
}
