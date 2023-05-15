import {createPrintDocumentUploadPropertiesFromDiscriminatorValue} from '../../../../../../../../models/createPrintDocumentUploadPropertiesFromDiscriminatorValue';
import {PrintDocumentUploadProperties} from '../../../../../../../../models/printDocumentUploadProperties';
import {serializePrintDocumentUploadProperties} from '../../../../../../../../models/serializePrintDocumentUploadProperties';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "properties": n => { createUploadSessionPostRequestBody.properties = n.getObjectValue<PrintDocumentUploadProperties>(createPrintDocumentUploadPropertiesFromDiscriminatorValue); },
    }
}
