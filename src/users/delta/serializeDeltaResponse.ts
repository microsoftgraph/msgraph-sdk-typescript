import { serializeBaseDeltaFunctionResponse } from '../../models/serializeBaseDeltaFunctionResponse';
import { serializeUser } from '../../models/serializeUser';
import { type User } from '../../models/user';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<User>("value", deltaResponse.value, serializeUser);
}
