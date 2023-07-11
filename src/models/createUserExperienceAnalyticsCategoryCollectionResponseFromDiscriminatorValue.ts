import {deserializeIntoUserExperienceAnalyticsCategoryCollectionResponse} from './deserializeIntoUserExperienceAnalyticsCategoryCollectionResponse';
import {UserExperienceAnalyticsCategoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsCategoryCollectionResponse;
}
