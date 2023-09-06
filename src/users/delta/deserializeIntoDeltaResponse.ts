import { createUserFromDiscriminatorValue } from '../../models/createUserFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../models/deserializeIntoBaseDeltaFunctionResponse';
import { serializeUser } from '../../models/serializeUser';
import { type User } from '../../models/user';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
    }
}
