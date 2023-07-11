import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createUserProcessingResultFromDiscriminatorValue} from './createUserProcessingResultFromDiscriminatorValue';
import {serializeUserProcessingResult} from './serializeUserProcessingResult';
import {UserProcessingResult} from './userProcessingResult';
import {UserProcessingResultCollectionResponse} from './userProcessingResultCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserProcessingResultCollectionResponse(userProcessingResultCollectionResponse: UserProcessingResultCollectionResponse | undefined = {} as UserProcessingResultCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userProcessingResultCollectionResponse),
        "value": n => { userProcessingResultCollectionResponse.value = n.getCollectionOfObjectValues<UserProcessingResult>(createUserProcessingResultFromDiscriminatorValue); },
    }
}
