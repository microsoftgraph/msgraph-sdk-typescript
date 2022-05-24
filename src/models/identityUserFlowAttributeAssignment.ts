import {Entity} from './entity';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {UserAttributeValuesItem} from './userAttributeValuesItem';

export interface IdentityUserFlowAttributeAssignment extends Entity{
    /** The display name of the identityUserFlowAttribute within a user flow. */
    displayName?:string | undefined;
    /** Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value. */
    isOptional?:boolean | undefined;
    /** Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address. */
    requiresVerification?:boolean | undefined;
    /** The user attribute that you want to add to your user flow. */
    userAttribute?:IdentityUserFlowAttribute | undefined;
    /** The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect. */
    userAttributeValues?:UserAttributeValuesItem[] | undefined;
    /** The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect. */
    userInputType?:IdentityUserFlowAttributeInputType | undefined;
}
