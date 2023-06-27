import {CustomCalloutExtension} from '../customCalloutExtension';
import {CustomExtensionCallbackConfiguration} from '../customExtensionCallbackConfiguration';
import {User} from '../user';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtension extends CustomCalloutExtension, Parsable {
    /**
     * The callback configuration for a custom task extension.
     */
    callbackConfiguration?: CustomExtensionCallbackConfiguration | undefined;
    /**
     * The unique identifier of the Azure AD user that created the custom task extension.Supports $filter(eq, ne) and $expand.
     */
    createdBy?: User | undefined;
    /**
     * When the custom task extension was created.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    createdDateTime?: Date | undefined;
    /**
     * The unique identifier of the Azure AD user that modified the custom task extension last.Supports $filter(eq, ne) and $expand.
     */
    lastModifiedBy?: User | undefined;
    /**
     * When the custom extension was last modified.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    lastModifiedDateTime?: Date | undefined;
}
