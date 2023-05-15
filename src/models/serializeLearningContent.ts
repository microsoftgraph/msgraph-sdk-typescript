import {LearningContent} from './learningContent';
import {serializeEntity} from './serializeEntity';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningContent(writer: SerializationWriter, learningContent: LearningContent | undefined = {} as LearningContent) : void {
        serializeEntity(writer, learningContent)
        writer.writeCollectionOfPrimitiveValues<string>("additionalTags", learningContent.additionalTags);
        writer.writeStringValue("contentWebUrl", learningContent.contentWebUrl);
        writer.writeCollectionOfPrimitiveValues<string>("contributors", learningContent.contributors);
        writer.writeDateValue("createdDateTime", learningContent.createdDateTime);
        writer.writeStringValue("description", learningContent.description);
        writer.writeDurationValue("duration", learningContent.duration);
        writer.writeStringValue("externalId", learningContent.externalId);
        writer.writeStringValue("format", learningContent.format);
        writer.writeBooleanValue("isActive", learningContent.isActive);
        writer.writeBooleanValue("isPremium", learningContent.isPremium);
        writer.writeBooleanValue("isSearchable", learningContent.isSearchable);
        writer.writeStringValue("languageTag", learningContent.languageTag);
        writer.writeDateValue("lastModifiedDateTime", learningContent.lastModifiedDateTime);
        writer.writeNumberValue("numberOfPages", learningContent.numberOfPages);
        writer.writeCollectionOfPrimitiveValues<string>("skillTags", learningContent.skillTags);
        writer.writeStringValue("sourceName", learningContent.sourceName);
        writer.writeStringValue("thumbnailWebUrl", learningContent.thumbnailWebUrl);
        writer.writeStringValue("title", learningContent.title);
}
