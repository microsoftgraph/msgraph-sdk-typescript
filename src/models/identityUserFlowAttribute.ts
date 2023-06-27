import {Entity} from './entity';
import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttribute extends Entity, Parsable {
    /**
     * The dataType property
     */
    dataType?: IdentityUserFlowAttributeDataType | undefined;
    /**
     * The description of the user flow attribute that's shown to the user at the time of sign-up.
     */
    description?: string | undefined;
    /**
     * The display name of the user flow attribute.
     */
    displayName?: string | undefined;
    /**
     * The userFlowAttributeType property
     */
    userFlowAttributeType?: IdentityUserFlowAttributeType | undefined;
}
