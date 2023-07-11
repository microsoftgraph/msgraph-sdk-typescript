import {createLearningContentFromDiscriminatorValue} from './createLearningContentFromDiscriminatorValue';
import {createLearningCourseActivityFromDiscriminatorValue} from './createLearningCourseActivityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LearningContent} from './learningContent';
import {LearningCourseActivity} from './learningCourseActivity';
import {LearningProvider} from './learningProvider';
import {serializeLearningContent} from './serializeLearningContent';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningProvider(learningProvider: LearningProvider | undefined = {} as LearningProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(learningProvider),
        "displayName": n => { learningProvider.displayName = n.getStringValue(); },
        "isCourseActivitySyncEnabled": n => { learningProvider.isCourseActivitySyncEnabled = n.getBooleanValue(); },
        "learningContents": n => { learningProvider.learningContents = n.getCollectionOfObjectValues<LearningContent>(createLearningContentFromDiscriminatorValue); },
        "learningCourseActivities": n => { learningProvider.learningCourseActivities = n.getCollectionOfObjectValues<LearningCourseActivity>(createLearningCourseActivityFromDiscriminatorValue); },
        "loginWebUrl": n => { learningProvider.loginWebUrl = n.getStringValue(); },
        "longLogoWebUrlForDarkTheme": n => { learningProvider.longLogoWebUrlForDarkTheme = n.getStringValue(); },
        "longLogoWebUrlForLightTheme": n => { learningProvider.longLogoWebUrlForLightTheme = n.getStringValue(); },
        "squareLogoWebUrlForDarkTheme": n => { learningProvider.squareLogoWebUrlForDarkTheme = n.getStringValue(); },
        "squareLogoWebUrlForLightTheme": n => { learningProvider.squareLogoWebUrlForLightTheme = n.getStringValue(); },
    }
}
