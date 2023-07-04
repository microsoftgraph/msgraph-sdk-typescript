import {Entity} from './entity';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityUserFlowAttributeAssignment extends Entity, Parsable {
    /**
     * The display name of the identityUserFlowAttribute within a user flow.
     */
    displayName?: string | undefined;
    /**
     * Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.
     */
    isOptional?: boolean | undefined;
    /**
     * Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.
     */
    requiresVerification?: boolean | undefined;
    /**
     * The user attribute that you want to add to your user flow.
     */
    userAttribute?: IdentityUserFlowAttribute | undefined;
    /**
     * The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.
     */
    userAttributeValues?: UserAttributeValuesItem[] | undefined;
    /**
     * The userInputType property
     */
    userInputType?: IdentityUserFlowAttributeInputType | undefined;
}
