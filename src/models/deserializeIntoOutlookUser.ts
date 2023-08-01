import {createOutlookCategoryFromDiscriminatorValue} from './createOutlookCategoryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {OutlookCategory} from './outlookCategory';
import type {OutlookUser} from './outlookUser';
import {serializeOutlookCategory} from './serializeOutlookCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookUser(outlookUser: OutlookUser | undefined = {} as OutlookUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookUser),
        "masterCategories": n => { outlookUser.masterCategories = n.getCollectionOfObjectValues<OutlookCategory>(createOutlookCategoryFromDiscriminatorValue); },
    }
}
