import { type ConditionalAccessPolicyDetail } from './conditionalAccessPolicyDetail';
import { type Entity } from './entity';
import { TemplateScenarios } from './templateScenarios';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
    scenarios?: TemplateScenarios[] | undefined;
}
