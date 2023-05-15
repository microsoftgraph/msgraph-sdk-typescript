import {createEducationClassFromDiscriminatorValue} from '../../../models/createEducationClassFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {EducationClass} from '../../../models/educationClass';
import {serializeEducationClass} from '../../../models/serializeEducationClass';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
    }
}
