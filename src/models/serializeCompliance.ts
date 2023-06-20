import {Compliance} from './compliance';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCompliance(compliance: Compliance | undefined = {} as Compliance, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", compliance.odataType);
        writer.writeAdditionalData(compliance.additionalData);
}
