import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsCategory} from './serializeUserExperienceAnalyticsCategory';
import {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import {UserExperienceAnalyticsCategoryCollectionResponse} from './userExperienceAnalyticsCategoryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsCategoryCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsCategoryCollectionResponse: UserExperienceAnalyticsCategoryCollectionResponse | undefined = {} as UserExperienceAnalyticsCategoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsCategory>("value", userExperienceAnalyticsCategoryCollectionResponse.value, serializeUserExperienceAnalyticsCategory);
}
