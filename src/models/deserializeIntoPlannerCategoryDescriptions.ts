import {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerCategoryDescriptions(plannerCategoryDescriptions: PlannerCategoryDescriptions | undefined = {} as PlannerCategoryDescriptions) : Record<string, (node: ParseNode) => void> {
    return {
        "category1": n => { plannerCategoryDescriptions.category1 = n.getStringValue(); },
        "category10": n => { plannerCategoryDescriptions.category10 = n.getStringValue(); },
        "category11": n => { plannerCategoryDescriptions.category11 = n.getStringValue(); },
        "category12": n => { plannerCategoryDescriptions.category12 = n.getStringValue(); },
        "category13": n => { plannerCategoryDescriptions.category13 = n.getStringValue(); },
        "category14": n => { plannerCategoryDescriptions.category14 = n.getStringValue(); },
        "category15": n => { plannerCategoryDescriptions.category15 = n.getStringValue(); },
        "category16": n => { plannerCategoryDescriptions.category16 = n.getStringValue(); },
        "category17": n => { plannerCategoryDescriptions.category17 = n.getStringValue(); },
        "category18": n => { plannerCategoryDescriptions.category18 = n.getStringValue(); },
        "category19": n => { plannerCategoryDescriptions.category19 = n.getStringValue(); },
        "category2": n => { plannerCategoryDescriptions.category2 = n.getStringValue(); },
        "category20": n => { plannerCategoryDescriptions.category20 = n.getStringValue(); },
        "category21": n => { plannerCategoryDescriptions.category21 = n.getStringValue(); },
        "category22": n => { plannerCategoryDescriptions.category22 = n.getStringValue(); },
        "category23": n => { plannerCategoryDescriptions.category23 = n.getStringValue(); },
        "category24": n => { plannerCategoryDescriptions.category24 = n.getStringValue(); },
        "category25": n => { plannerCategoryDescriptions.category25 = n.getStringValue(); },
        "category3": n => { plannerCategoryDescriptions.category3 = n.getStringValue(); },
        "category4": n => { plannerCategoryDescriptions.category4 = n.getStringValue(); },
        "category5": n => { plannerCategoryDescriptions.category5 = n.getStringValue(); },
        "category6": n => { plannerCategoryDescriptions.category6 = n.getStringValue(); },
        "category7": n => { plannerCategoryDescriptions.category7 = n.getStringValue(); },
        "category8": n => { plannerCategoryDescriptions.category8 = n.getStringValue(); },
        "category9": n => { plannerCategoryDescriptions.category9 = n.getStringValue(); },
        "@odata.type": n => { plannerCategoryDescriptions.odataType = n.getStringValue(); },
    }
}
