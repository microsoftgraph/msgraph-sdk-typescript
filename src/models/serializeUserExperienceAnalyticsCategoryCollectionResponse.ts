import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsCategory} from './serializeUserExperienceAnalyticsCategory';
import type {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import type {UserExperienceAnalyticsCategoryCollectionResponse} from './userExperienceAnalyticsCategoryCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsCategoryCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsCategoryCollectionResponse: UserExperienceAnalyticsCategoryCollectionResponse | undefined = {} as UserExperienceAnalyticsCategoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsCategory>("value", userExperienceAnalyticsCategoryCollectionResponse.value, serializeUserExperienceAnalyticsCategory);
}
