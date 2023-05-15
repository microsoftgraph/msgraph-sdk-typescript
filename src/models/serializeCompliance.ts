import {Compliance} from './compliance';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCompliance(writer: SerializationWriter, compliance: Compliance | undefined = {} as Compliance) : void {
        writer.writeStringValue("@odata.type", compliance.odataType);
        writer.writeAdditionalData(compliance.additionalData);
}
