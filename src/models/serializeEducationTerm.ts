import type {EducationTerm} from './educationTerm';
import {DateOnly} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationTerm(writer: SerializationWriter, educationTerm: EducationTerm | undefined = {} as EducationTerm) : void {
        writer.writeStringValue("displayName", educationTerm.displayName);
        writer.writeDateOnlyValue("endDate", educationTerm.endDate);
        writer.writeStringValue("externalId", educationTerm.externalId);
        writer.writeStringValue("@odata.type", educationTerm.odataType);
        writer.writeDateOnlyValue("startDate", educationTerm.startDate);
        writer.writeAdditionalData(educationTerm.additionalData);
}
