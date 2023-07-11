import {LearningContent} from './learningContent';
import {LearningCourseActivity} from './learningCourseActivity';
import {LearningProvider} from './learningProvider';
import {serializeEntity} from './serializeEntity';
import {serializeLearningContent} from './serializeLearningContent';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningProvider(writer: SerializationWriter, learningProvider: LearningProvider | undefined = {} as LearningProvider) : void {
        serializeEntity(writer, learningProvider)
        writer.writeStringValue("displayName", learningProvider.displayName);
        writer.writeBooleanValue("isCourseActivitySyncEnabled", learningProvider.isCourseActivitySyncEnabled);
        writer.writeCollectionOfObjectValues<LearningContent>("learningContents", learningProvider.learningContents, serializeLearningContent);
        writer.writeCollectionOfObjectValues<LearningCourseActivity>("learningCourseActivities", learningProvider.learningCourseActivities, serializeLearningCourseActivity);
        writer.writeStringValue("loginWebUrl", learningProvider.loginWebUrl);
        writer.writeStringValue("longLogoWebUrlForDarkTheme", learningProvider.longLogoWebUrlForDarkTheme);
        writer.writeStringValue("longLogoWebUrlForLightTheme", learningProvider.longLogoWebUrlForLightTheme);
        writer.writeStringValue("squareLogoWebUrlForDarkTheme", learningProvider.squareLogoWebUrlForDarkTheme);
        writer.writeStringValue("squareLogoWebUrlForLightTheme", learningProvider.squareLogoWebUrlForLightTheme);
}
