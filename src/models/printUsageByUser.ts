import {PrintUsage} from './printUsage';

export interface PrintUsageByUser extends PrintUsage{
    /** The UPN of the user represented by these statistics. */
    userPrincipalName?:string | undefined;
}
