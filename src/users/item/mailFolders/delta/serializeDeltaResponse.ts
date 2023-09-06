import { type MailFolder } from '../../../../models/mailFolder';
import { serializeBaseDeltaFunctionResponse } from '../../../../models/serializeBaseDeltaFunctionResponse';
import { serializeMailFolder } from '../../../../models/serializeMailFolder';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<MailFolder>("value", deltaResponse.value, serializeMailFolder);
}
