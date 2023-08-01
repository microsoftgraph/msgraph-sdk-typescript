import {createGroupFromDiscriminatorValue} from '../../models/createGroupFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../models/deserializeIntoBaseDeltaFunctionResponse';
import type {Group} from '../../models/group';
import {serializeGroup} from '../../models/serializeGroup';
import type {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
    }
}
