import {serializeEntity} from './serializeEntity';
import {serializeTermsAndConditionsAcceptanceStatus} from './serializeTermsAndConditionsAcceptanceStatus';
import {serializeTermsAndConditionsAssignment} from './serializeTermsAndConditionsAssignment';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditions(writer: SerializationWriter, termsAndConditions: TermsAndConditions | undefined = {} as TermsAndConditions) : void {
        serializeEntity(writer, termsAndConditions)
        writer.writeStringValue("acceptanceStatement", termsAndConditions.acceptanceStatement);
        writer.writeCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>("acceptanceStatuses", termsAndConditions.acceptanceStatuses, serializeTermsAndConditionsAcceptanceStatus);
        writer.writeCollectionOfObjectValues<TermsAndConditionsAssignment>("assignments", termsAndConditions.assignments, serializeTermsAndConditionsAssignment);
        writer.writeStringValue("bodyText", termsAndConditions.bodyText);
        writer.writeDateValue("createdDateTime", termsAndConditions.createdDateTime);
        writer.writeStringValue("description", termsAndConditions.description);
        writer.writeStringValue("displayName", termsAndConditions.displayName);
        writer.writeDateValue("lastModifiedDateTime", termsAndConditions.lastModifiedDateTime);
        writer.writeStringValue("title", termsAndConditions.title);
        writer.writeNumberValue("version", termsAndConditions.version);
}
