import {PrintJobConfiguration} from '../../../../../../models/printJobConfiguration';
import {serializePrintJobConfiguration} from '../../../../../../models/serializePrintJobConfiguration';
import {RedirectPostRequestBody} from './redirectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRedirectPostRequestBody(writer: SerializationWriter, redirectPostRequestBody: RedirectPostRequestBody | undefined = {} as RedirectPostRequestBody) : void {
        writer.writeObjectValue<PrintJobConfiguration>("configuration", redirectPostRequestBody.configuration, serializePrintJobConfiguration);
        writer.writeStringValue("destinationPrinterId", redirectPostRequestBody.destinationPrinterId);
        writer.writeAdditionalData(redirectPostRequestBody.additionalData);
}
