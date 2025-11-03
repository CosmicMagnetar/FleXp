import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Post {
  id: number;
  user: string;
  level: number;
  content: string;
  likes: number;
  comments: number;
  liked: boolean;
}

export default function CommunityScreen() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, user: 'ShadowWarrior', level: 12, content: 'Just crushed a 45-min Beast Mode session! 💪 Who\'s joining tomorrow?', likes: 24, comments: 8, liked: false },
    { id: 2, user: 'FitQueen', level: 9, content: 'New personal record on strength training! Keep pushing, warriors!', likes: 31, comments: 12, liked: true },
    { id: 3, user: 'ZenMaster', level: 15, content: 'Consistency is key. Day 30 of my streak! 🔥', likes: 45, comments: 15, liked: false },
  ]);

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Guild Community</Text>
        <TouchableOpacity>
          <Icon name="plus-circle" size={24} color="#7fff00" />
        </TouchableOpacity>
      </View>

      {posts.map((post) => (
        <View key={post.id} style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.postUserInfo}>
              <View style={styles.postAvatar}>
                <Icon name="user" size={20} color="#00d4ff" />
              </View>
              <View>
                <Text style={styles.postUsername}>{post.user}</Text>
                <Text style={styles.postLevel}>Level {post.level} Warrior</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon name="more-horizontal" size={20} color="#8a8a9e" />
            </TouchableOpacity>
          </View>

          <Text style={styles.postContent}>{post.content}</Text>

          <View style={styles.postActions}>
            <TouchableOpacity 
              style={styles.postAction}
              onPress={() => toggleLike(post.id)}
              activeOpacity={0.8}
            >
              <Icon 
                name={post.liked ? "heart" : "heart"}
                size={20} 
                color={post.liked ? "#ff8c42" : "#8a8a9e"}
              />
              <Text style={[styles.postActionText, post.liked && styles.postActionTextActive]}>
                {post.likes}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.postAction} activeOpacity={0.8}>
              <Icon name="message-circle" size={20} color="#8a8a9e" />
              <Text style={styles.postActionText}>{post.comments}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.postAction} activeOpacity={0.8}>
              <Icon name="share-2" size={20} color="#8a8a9e" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
  },
  postCard: {
    backgroundColor: '#16213e',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2a2a3e',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1a2e',
    borderWidth: 2,
    borderColor: '#00d4ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postUsername: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  postLevel: {
    color: '#8a8a9e',
    fontSize: 12,
    fontWeight: '600',
  },
  postContent: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    gap: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#2a2a3e',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  postActionText: {
    color: '#8a8a9e',
    fontSize: 14,
    fontWeight: '600',
  },
  postActionTextActive: {
    color: '#ff8c42',
  },
});

