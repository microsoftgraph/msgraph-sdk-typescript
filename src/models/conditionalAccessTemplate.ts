import {ConditionalAccessPolicyDetail} from './conditionalAccessPolicyDetail';
import {Entity} from './entity';
import {TemplateScenarios} from './templateScenarios';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessTemplate extends Entity, Parsable {
    /**
     * The user-friendly name of the template.
     */
    description?: string | undefined;
    /**
     * The details property
     */
    details?: ConditionalAccessPolicyDetail | undefined;
    /**
     * The user-friendly name of the template.
     */
    name?: string | undefined;
    /**
     * The scenarios property
     */
    scenarios?: TemplateScenarios | undefined;
}
