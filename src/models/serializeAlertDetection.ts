import {AlertDetection} from './alertDetection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertDetection(alertDetection: AlertDetection | undefined = {} as AlertDetection, writer: SerializationWriter) : void {
        writer.writeStringValue("detectionType", alertDetection.detectionType);
        writer.writeStringValue("method", alertDetection.method);
        writer.writeStringValue("name", alertDetection.name);
        writer.writeStringValue("@odata.type", alertDetection.odataType);
        writer.writeAdditionalData(alertDetection.additionalData);
}
