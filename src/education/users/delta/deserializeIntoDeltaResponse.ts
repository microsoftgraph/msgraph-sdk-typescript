import {createEducationUserFromDiscriminatorValue} from '../../../models/createEducationUserFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../models/deserializeIntoBaseDeltaFunctionResponse';
import type {EducationUser} from '../../../models/educationUser';
import {serializeEducationUser} from '../../../models/serializeEducationUser';
import type {DeltaResponse} from './deltaResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
    }
}
