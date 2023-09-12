import { type AlertDetection } from './alertDetection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAlertDetection(writer: SerializationWriter, alertDetection: AlertDetection | undefined = {} as AlertDetection) : void {
        writer.writeStringValue("detectionType", alertDetection.detectionType);
        writer.writeStringValue("method", alertDetection.method);
        writer.writeStringValue("name", alertDetection.name);
        writer.writeStringValue("@odata.type", alertDetection.odataType);
        writer.writeAdditionalData(alertDetection.additionalData);
}
