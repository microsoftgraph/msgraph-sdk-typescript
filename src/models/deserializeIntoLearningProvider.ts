import {createLearningContentFromDiscriminatorValue} from './createLearningContentFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LearningContent} from './learningContent';
import {LearningProvider} from './learningProvider';
import {serializeLearningContent} from './serializeLearningContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningProvider(learningProvider: LearningProvider | undefined = {} as LearningProvider) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(learningProvider),
        "displayName": n => { learningProvider.displayName = n.getStringValue(); },
        "learningContents": n => { learningProvider.learningContents = n.getCollectionOfObjectValues<LearningContent>(createLearningContentFromDiscriminatorValue); },
        "loginWebUrl": n => { learningProvider.loginWebUrl = n.getStringValue(); },
        "longLogoWebUrlForDarkTheme": n => { learningProvider.longLogoWebUrlForDarkTheme = n.getStringValue(); },
        "longLogoWebUrlForLightTheme": n => { learningProvider.longLogoWebUrlForLightTheme = n.getStringValue(); },
        "squareLogoWebUrlForDarkTheme": n => { learningProvider.squareLogoWebUrlForDarkTheme = n.getStringValue(); },
        "squareLogoWebUrlForLightTheme": n => { learningProvider.squareLogoWebUrlForLightTheme = n.getStringValue(); },
    }
}
