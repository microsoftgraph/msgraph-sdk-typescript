import {createEducationCategoryFromDiscriminatorValue} from '../../../../../../models/createEducationCategoryFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {EducationCategory} from '../../../../../../models/educationCategory';
import {serializeEducationCategory} from '../../../../../../models/serializeEducationCategory';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<EducationCategory>(createEducationCategoryFromDiscriminatorValue); },
    }
}
