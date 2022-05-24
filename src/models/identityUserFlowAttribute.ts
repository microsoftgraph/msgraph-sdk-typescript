import {Entity} from './entity';
import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';

export interface IdentityUserFlowAttribute extends Entity{
    /** The data type of the user flow attribute. This cannot be modified after the custom user flow attribute is created. The supported values for dataType are: string , boolean , int64 , stringCollection , dateTime. */
    dataType?:IdentityUserFlowAttributeDataType | undefined;
    /** The description of the user flow attribute that's shown to the user at the time of sign-up. */
    description?:string | undefined;
    /** The display name of the user flow attribute. */
    displayName?:string | undefined;
    /** The type of the user flow attribute. This is a read-only attribute that is automatically set. Depending on the type of attribute, the values for this property will be builtIn, custom, or required. */
    userFlowAttributeType?:IdentityUserFlowAttributeType | undefined;
}
