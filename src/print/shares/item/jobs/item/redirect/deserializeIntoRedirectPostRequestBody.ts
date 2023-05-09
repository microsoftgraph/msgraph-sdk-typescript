import {createPrintJobConfigurationFromDiscriminatorValue} from '../../../../../../models/createPrintJobConfigurationFromDiscriminatorValue';
import {PrintJobConfiguration} from '../../../../../../models/printJobConfiguration';
import {serializePrintJobConfiguration} from '../../../../../../models/serializePrintJobConfiguration';
import {RedirectPostRequestBody} from './redirectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedirectPostRequestBody(redirectPostRequestBody: RedirectPostRequestBody | undefined = {} as RedirectPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "configuration": n => { redirectPostRequestBody.configuration = n.getObjectValue<PrintJobConfiguration>(createPrintJobConfigurationFromDiscriminatorValue); },
        "destinationPrinterId": n => { redirectPostRequestBody.destinationPrinterId = n.getStringValue(); },
    }
}
