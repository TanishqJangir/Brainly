import { getYouTubeVideoId } from "./getLinkIds";
import youtubeSvg from "../../../assets/logos/youtube.svg"
import xSvg from "../../../assets/logos/x.svg";
import instagramSvg from "../../../assets/logos/instagram.svg";
import LinkedinSvg from "../../../assets/logos/linkedin.svg";
import { useEffect } from "react";
import { getLinkedInPostId } from "./getLinkIds";
import NotionIcon from "../../../assets/svgIcons/NotionIcon";
import GithubIcon from "../../../assets/svgIcons/GithubIcon";


export const EmbedLinks = ({ type, customType, url }: {
    type: "youtube" | "x" | "notion" | "linkedin" | "instagram" | "github" | "link" | "other";
    customType?: string;
    url: string;
}) => {
    if (type === "youtube") {
        const videoId = getYouTubeVideoId(url);

        if (!videoId) {
            return (
                <div className="w-full aspect-video rounded-xl flex flex-col items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500">
                    <img src={youtubeSvg} alt="YouTube Icon" className="w-10 mr-2" />
                    Preview Not Available
                </div>
            );
        }
        return (
            <iframe className="w-full aspect-video rounded-xl"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
                />
        )
    }


    if (type === "x") {
        const tweetUrl = url.replace("x.com", "twitter.com");
        const isTweet = /\/status\/\d+/.test(tweetUrl);

        // Load Twitter widgets.js after rendering
        useEffect(() => {
            if (!isTweet) return;
            if (!(window as any).twttr) {
                const script = document.createElement("script");
                script.src = "https://platform.twitter.com/widgets.js";
                script.async = true;
                script.charset = "utf-8";
                document.body.appendChild(script);
                return () => {
                    document.body.removeChild(script);
                };
            } else {
                (window as any).twttr.widgets.load();
            }
        }, [tweetUrl, isTweet]);

        if (!isTweet) {
            return (
                <div className="w-full aspect-video rounded-xl flex flex-col items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500">
                    <img src={xSvg} alt="X Icon" className="w-10 h-10" />
                    Preview Not Available
                </div>
            );
        }

        return (
            <div className="w-full aspect-video rounded-xl overflow-y-auto bg-gray-100 dark:bg-white/10 [&::-webkit-scrollbar]:w-0 [scrollbar-width:none]">
                <blockquote className="twitter-tweet w-full h-full rounded-xl">
                    <a href={tweetUrl}></a>
                </blockquote>
            </div>
        );
    }


    if (type === "instagram") {
        return <InstagramEmbed url={url} />;
    }

    if (type === "linkedin") {
        const postId = getLinkedInPostId(url);

        if (!postId) {
            return (
                <div className="w-full aspect-video flex flex-col items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500 rounded-xl">
                    <img src={LinkedinSvg} alt="LinkedIn Icon" className="w-10 h-10" />
                    Preview Not Available
                </div>
            );
        }

        return (
            <iframe
                src={`https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${postId}?collapsed=1`}
                className="w-full h-full rounded-xl"
                frameBorder="0"
                title="LinkedIn Post"
            />
        );
    }

    if (type === "other" && customType) {
        return (
            <div className="w-full aspect-video rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
                {customType}
            </div>
        )
    }


    if (type === "notion") {
        return (
            <div className="w-full aspect-video rounded-xl flex flex-col items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
                <NotionIcon className="h-8"/>
                No Preview Available
            </div>
        );
    }

    if (type === "github") {
        return (
            <div className="w-full aspect-video rounded-xl flex flex-col items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
                <GithubIcon className="size-8"/>
                No Preview Available
            </div>
        );
    }

}


export const InstagramEmbed = ({ url }: { url: string }) => {

    const isPost = /\/(p|reel|tv)\//.test(url);

    useEffect(() => {
        if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, [url]);

    if (!isPost) {
        return (
            <div className="w-full aspect-video rounded-xl flex flex-col items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500">
                <img src={instagramSvg} alt="Instagram Icon" className="w-10" />
                Preview Not Available
            </div>
        );
    }

    return (
   <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-white/10">
    <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:w-0 [scrollbar-width:none]">
        <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
        />
    </div>
</div>
);
};

