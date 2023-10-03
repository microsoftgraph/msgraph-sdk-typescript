import { MailboxSettingsRequestBuilder } from './mailboxSettings/mailboxSettingsRequestBuilder';
import { RefRequestBuilder } from './ref/refRequestBuilder';
import { ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/serviceProvisioningErrorsRequestBuilder';
import { BaseRequestBuilder, type RequestAdapter } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /print/shares/{printerShare-id}/allowedUsers/{user-id}
 */
export class UserItemRequestBuilder extends BaseRequestBuilder {
    /**
     * The mailboxSettings property
     */
    public get mailboxSettings(): MailboxSettingsRequestBuilder {
        return new MailboxSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of print entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * The serviceProvisioningErrors property
     */
    public get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder {
        return new ServiceProvisioningErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UserItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/print/shares/{printerShare%2Did}/allowedUsers/{user%2Did}");
    };
}
