import {MailFolder} from '../../../../../../models/mailFolder';
import {serializeBaseDeltaFunctionResponse} from '../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeMailFolder} from '../../../../../../models/serializeMailFolder';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<MailFolder>("value", deltaResponse.value, serializeMailFolder);
}
