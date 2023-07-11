import {PrintUsage} from './printUsage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByUser extends Parsable, PrintUsage {
    /**
     * The UPN of the user represented by these statistics.
     */
    userPrincipalName?: string | undefined;
}
