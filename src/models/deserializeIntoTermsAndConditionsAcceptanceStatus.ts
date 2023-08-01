import {createTermsAndConditionsFromDiscriminatorValue} from './createTermsAndConditionsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import type {TermsAndConditions} from './termsAndConditions';
import type {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAcceptanceStatus(termsAndConditionsAcceptanceStatus: TermsAndConditionsAcceptanceStatus | undefined = {} as TermsAndConditionsAcceptanceStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(termsAndConditionsAcceptanceStatus),
        "acceptedDateTime": n => { termsAndConditionsAcceptanceStatus.acceptedDateTime = n.getDateValue(); },
        "acceptedVersion": n => { termsAndConditionsAcceptanceStatus.acceptedVersion = n.getNumberValue(); },
        "termsAndConditions": n => { termsAndConditionsAcceptanceStatus.termsAndConditions = n.getObjectValue<TermsAndConditions>(createTermsAndConditionsFromDiscriminatorValue); },
        "userDisplayName": n => { termsAndConditionsAcceptanceStatus.userDisplayName = n.getStringValue(); },
        "userPrincipalName": n => { termsAndConditionsAcceptanceStatus.userPrincipalName = n.getStringValue(); },
    }
}
