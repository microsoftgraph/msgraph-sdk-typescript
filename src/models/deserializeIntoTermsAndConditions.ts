import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from './createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {createTermsAndConditionsAssignmentFromDiscriminatorValue} from './createTermsAndConditionsAssignmentFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeTermsAndConditionsAcceptanceStatus} from './serializeTermsAndConditionsAcceptanceStatus';
import {serializeTermsAndConditionsAssignment} from './serializeTermsAndConditionsAssignment';
import type {TermsAndConditions} from './termsAndConditions';
import type {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import type {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditions(termsAndConditions: TermsAndConditions | undefined = {} as TermsAndConditions) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(termsAndConditions),
        "acceptanceStatement": n => { termsAndConditions.acceptanceStatement = n.getStringValue(); },
        "acceptanceStatuses": n => { termsAndConditions.acceptanceStatuses = n.getCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>(createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue); },
        "assignments": n => { termsAndConditions.assignments = n.getCollectionOfObjectValues<TermsAndConditionsAssignment>(createTermsAndConditionsAssignmentFromDiscriminatorValue); },
        "bodyText": n => { termsAndConditions.bodyText = n.getStringValue(); },
        "createdDateTime": n => { termsAndConditions.createdDateTime = n.getDateValue(); },
        "description": n => { termsAndConditions.description = n.getStringValue(); },
        "displayName": n => { termsAndConditions.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { termsAndConditions.lastModifiedDateTime = n.getDateValue(); },
        "title": n => { termsAndConditions.title = n.getStringValue(); },
        "version": n => { termsAndConditions.version = n.getNumberValue(); },
    }
}
