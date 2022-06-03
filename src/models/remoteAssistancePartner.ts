import {Entity} from './entity';
import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteAssistancePartner extends Entity, Partial<Parsable> {
    /** Display name of the partner. */
    displayName?: string | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner. */
    lastConnectionDateTime?: Date | undefined;
    /** A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded. */
    onboardingStatus?: RemoteAssistanceOnboardingStatus | undefined;
    /** URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service. */
    onboardingUrl?: string | undefined;
}
