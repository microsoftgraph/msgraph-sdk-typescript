import { type PrintJobConfiguration } from '../../../../../../models/printJobConfiguration';
import { serializePrintJobConfiguration } from '../../../../../../models/serializePrintJobConfiguration';
import { type RedirectPostRequestBody } from './redirectPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRedirectPostRequestBody(writer: SerializationWriter, redirectPostRequestBody: RedirectPostRequestBody | undefined = {} as RedirectPostRequestBody) : void {
        writer.writeObjectValue<PrintJobConfiguration>("configuration", redirectPostRequestBody.configuration, serializePrintJobConfiguration);
        writer.writeStringValue("destinationPrinterId", redirectPostRequestBody.destinationPrinterId);
        writer.writeAdditionalData(redirectPostRequestBody.additionalData);
}
