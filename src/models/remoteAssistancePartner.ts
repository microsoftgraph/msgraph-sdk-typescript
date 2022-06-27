import {Entity} from './entity';
import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteAssistancePartner extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Display name of the partner. */
    displayName?: string | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner. */
    lastConnectionDateTime?: Date | undefined;
    /** A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded. */
    onboardingStatus?: RemoteAssistanceOnboardingStatus | undefined;
    /** URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service. */
    onboardingUrl?: string | undefined;
}
