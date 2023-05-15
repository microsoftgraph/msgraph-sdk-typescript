import {TermsExpiration} from './termsExpiration';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsExpiration(termsExpiration: TermsExpiration | undefined = {} as TermsExpiration) : Record<string, (node: ParseNode) => void> {
    return {
        "frequency": n => { termsExpiration.frequency = n.getDurationValue(); },
        "@odata.type": n => { termsExpiration.odataType = n.getStringValue(); },
        "startDateTime": n => { termsExpiration.startDateTime = n.getDateValue(); },
    }
}
