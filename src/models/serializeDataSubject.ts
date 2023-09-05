import { type DataSubject } from './dataSubject';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDataSubject(writer: SerializationWriter, dataSubject: DataSubject | undefined = {} as DataSubject) : void {
        writer.writeStringValue("email", dataSubject.email);
        writer.writeStringValue("firstName", dataSubject.firstName);
        writer.writeStringValue("lastName", dataSubject.lastName);
        writer.writeStringValue("@odata.type", dataSubject.odataType);
        writer.writeStringValue("residency", dataSubject.residency);
        writer.writeAdditionalData(dataSubject.additionalData);
}
