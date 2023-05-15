import {DataSubject} from './dataSubject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSubject(writer: SerializationWriter, dataSubject: DataSubject | undefined = {} as DataSubject) : void {
        writer.writeStringValue("email", dataSubject.email);
        writer.writeStringValue("firstName", dataSubject.firstName);
        writer.writeStringValue("lastName", dataSubject.lastName);
        writer.writeStringValue("@odata.type", dataSubject.odataType);
        writer.writeStringValue("residency", dataSubject.residency);
        writer.writeAdditionalData(dataSubject.additionalData);
}
