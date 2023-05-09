import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LearningContent} from './learningContent';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningContent(learningContent: LearningContent | undefined = {} as LearningContent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(learningContent),
        "additionalTags": n => { learningContent.additionalTags = n.getCollectionOfPrimitiveValues<string>(); },
        "contentWebUrl": n => { learningContent.contentWebUrl = n.getStringValue(); },
        "contributors": n => { learningContent.contributors = n.getCollectionOfPrimitiveValues<string>(); },
        "createdDateTime": n => { learningContent.createdDateTime = n.getDateValue(); },
        "description": n => { learningContent.description = n.getStringValue(); },
        "duration": n => { learningContent.duration = n.getDurationValue(); },
        "externalId": n => { learningContent.externalId = n.getStringValue(); },
        "format": n => { learningContent.format = n.getStringValue(); },
        "isActive": n => { learningContent.isActive = n.getBooleanValue(); },
        "isPremium": n => { learningContent.isPremium = n.getBooleanValue(); },
        "isSearchable": n => { learningContent.isSearchable = n.getBooleanValue(); },
        "languageTag": n => { learningContent.languageTag = n.getStringValue(); },
        "lastModifiedDateTime": n => { learningContent.lastModifiedDateTime = n.getDateValue(); },
        "numberOfPages": n => { learningContent.numberOfPages = n.getNumberValue(); },
        "skillTags": n => { learningContent.skillTags = n.getCollectionOfPrimitiveValues<string>(); },
        "sourceName": n => { learningContent.sourceName = n.getStringValue(); },
        "thumbnailWebUrl": n => { learningContent.thumbnailWebUrl = n.getStringValue(); },
        "title": n => { learningContent.title = n.getStringValue(); },
    }
}
